import { Movie } from "./movie";
import { ResponseModel } from "./responseModel";

export interface MovieResponseModel extends ResponseModel{
  data:Movie[]
}
