import IReceive, {
  IBaseReceive,
} from '@wb-types/core/interfaces/models/receive.interface'

export default abstract class ReceiveRepository {
  abstract createReceive(
    quoteId: string,
    receive: IBaseReceive
  ): Promise<IReceive>
}

export type ICreateReceiveOutput = IReceive
