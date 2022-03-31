import { Apps } from "@mui/icons-material";
import { observable} from "mobx";

export const AppState=observable(
    {
        result:[],
        getResult() {
            return AppState.result
          },
    }
)