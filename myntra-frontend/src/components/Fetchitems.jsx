import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProduct = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());
      let items = await fetch("http://localhost:5000/products", { signal });
      items = await items.json();
      //console.log(items);
      dispatch(fetchStatusActions.markFetchDone());
      dispatch(fetchStatusActions.markFetchingFinished());
      dispatch(itemsActions.addInitialItems(items));
    };
    fetchProduct();

    // dispatch(fetchStatusActions.markFetchingStarted());
    // fetch("http://localhost:8080/items", { signal })
    //   .then((res) => res.json())
    //   .then(({ items }) => {
    //     dispatch(fetchStatusActions.markFetchDone());
    //     dispatch(fetchStatusActions.markFetchingFinished());
    //     dispatch(itemsActions.addInitialItems(items[0]));
    //   });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
