import Footballer from '../../../models/footballer';
import { Footboller } from '../../../types/footboller';

const getAllFootballerQuery = {
  getAllFootballer: async (): Promise<Footboller[]> =>
    await Footballer.find({}),
};
export default getAllFootballerQuery;
