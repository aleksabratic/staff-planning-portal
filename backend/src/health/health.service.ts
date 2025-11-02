import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  /**
   * Return a simple object that confirms the service is reachable.
   */
  getStatus(): { status: 'ok' } {
    return { status: 'ok' };
  }
}
