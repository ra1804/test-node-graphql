import Footballer from '../../../models/footballer';
import { AddFootbollerInput, Footboller } from '../../../types/footboller';

const addFootballerMutation = {
  addFootballer: async (
    _: any,
    args: AddFootbollerInput,
  ): Promise<Footboller> => {
    const footballer = new Footballer(args);

    const newFootballer = await footballer.save();
    return { id: newFootballer._id, ...newFootballer._doc };
  },
};
export default addFootballerMutation;
