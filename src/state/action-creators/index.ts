import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    // start search
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    // fetch data in try catch
    try {
      const {
        data
      } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term, 
        },
      });

      // retrieve the data we want from the response
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      // dispatch action success
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });
    } catch (err) {
      // add Type guard
      if (err instanceof Error) {
        // dispatch action error
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message
        });
      }
    }
  }
}