import Footballer from '../../../models/footballer';
import { DeleteFootbollerInput } from '../../../types/footboller';

const deleteFootballerMutation = {
  deleteFootballer: async (
    _: any,
    args: DeleteFootbollerInput,
  ): Promise<string> => {
    const footballer = await Footballer.findById(args.id);

    if (!footballer) {
      return `Footballer not found.`;
    }
    if (footballer.number === '10') {
      return `Footballer with number 10 cannot be removed.`;
    }
    await footballer.deleteOne();
    return `Footballer ${args.id} deleted.`;
  },
};
export default deleteFootballerMutation;
