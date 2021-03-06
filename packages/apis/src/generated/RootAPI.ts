import {APIBase, RequestOptions} from '../APIBase'
import {Routes} from './types'

export interface GetRoutesRequest {}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetRoutes
 */
export class RootAPI extends APIBase {
  /**
   * Creates RootAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Map of all top level routes available.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetRoutes
   * @param request
   * @return promise of response
   */
  getRoutes(
    request?: GetRoutesRequest,
    requestOptions?: RequestOptions
  ): Promise<Routes> {
    return this.request('GET', `/api/v2/`, request, requestOptions)
  }
}
