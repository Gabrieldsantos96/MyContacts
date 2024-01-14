/*
  U = Unparsed
  P = Parsed
*/

type ToUse<U, P> = (data: U) => P;
type ToSend<U, P> = (data: P) => U;

/**
 *
 * @example
 *   interface Unparsed { user_id: number };
 *   interface Parsed { useId: number }
 *
 *   const toUseMapper = (data: Unparsed): Parsed => {
 *     return { userId: data.user_id };
 *   }
 *   const toSendMapper = (data: Parsed): Unparsed => {
 *     return { user_id: data.userId };
 *   }
 *
 *   const mapper = new Mapper<Unparsed, Parsed>(toUseMapper, toSendMapper);
 *
 *   mapper.toUse({ user_id: 1 }) // { userId: 1 }
 *   mapper.toSend({ useId: 1 }) // { user_id: 1 }
 *
 * @param   {Function} opcional   toUseMapper: vai converter os dados de Não Parseados para Parseados (ex: do backend para o frontend)
 * @param   {Function} opcional   toSendMapper: vai converter os dados de Parseados para Não Parseados (ex: do frontend para o backend)
 *
 */

export class Mapper<U, P> {
  private readonly parseToUse?: ToUse<U, P>;

  private readonly parseToSend?: ToSend<U, P>;

  constructor(toUseMapper?: ToUse<U, P>, toSendMapper?: ToSend<U, P>) {
    this.parseToUse = toUseMapper;
    this.parseToSend = toSendMapper;
  }

  toUse(data: U): P {
    return this.parseToUse(data);
  }

  toSend(data: P): U {
    return this.parseToSend(data);
  }
}
