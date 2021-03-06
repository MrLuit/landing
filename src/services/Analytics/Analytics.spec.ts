/* eslint-disable @typescript-eslint/camelcase */

import mockAxios from 'jest-mock-axios';
import { waitFor } from '@testing-library/react';

import AnalyticsService from './Analytics';

let category: string;
let eventAction: string;
let appUrl: string;

describe('AnalyticsService', () => {
  beforeEach(() => {
    category = 'Category';
    eventAction = 'Name of Event';
    appUrl = 'App route url';
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('should send an action name', async () => {
    const promise = AnalyticsService.instance.track(category, eventAction);

    await waitFor(() =>
      expect(mockAxios.get).toBeCalledWith('', {
        params: expect.objectContaining({
          e_c: category,
          action_name: eventAction,
        }),
      })
    );

    mockAxios.mockResponse();

    const result = await promise;

    const { status } = result;

    expect(status).toBe(200);
  });

  it('should add page url param to page visit event', async () => {
    const promise = AnalyticsService.instance.trackPageVisit(appUrl);

    await waitFor(() =>
      expect(mockAxios.get).toBeCalledWith('', {
        params: expect.objectContaining({ url: appUrl }),
      })
    );

    mockAxios.mockResponse();

    const result = await promise;

    const { status } = result;
    expect(status).toBe(200);
  });
});
