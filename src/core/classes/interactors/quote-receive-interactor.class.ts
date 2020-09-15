import IQuote from 'src/core/interfaces/models/quote.interface'
import IReceive from 'src/core/interfaces/models/receive.interface'

export default abstract class QuoteReceiveInteractor {
  abstract receiveQuote(input: IReceiveQuoteInput): Promise<IRecieveQuoteOutput>
}

export interface IReceiveQuoteInput {
  serverId: string
  channelId: string
  messageId: string
  receiverId: string
}

export interface IRecieveQuoteOutput {
  quote: IQuote
  receive: IReceive
}
