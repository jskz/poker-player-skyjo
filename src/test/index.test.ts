import request from 'supertest';
import app from '../index';

import mockState from './mock.js';

describe('E2E Tests for / endpoint', () => {
  afterAll(() => {
    app.close();
  })

  it('should return OK for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('should handle bet_request action', async () => {
    const gameState = mockState;

    const response = await request(app)
      .post('/')
      .send({ action: 'bet_request', game_state: JSON.stringify(gameState) });

    expect(response.status).toBe(200);
    expect(response.text).toBe('0'); // Assuming the minimum_raise is returned
  });

  it('should handle showdown action', async () => {
    const gameState = {
    };

    const response = await request(app)
      .post('/')
      .send({ action: 'showdown', game_state: JSON.stringify(gameState) });

    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('should return version for version action', async () => {
    const response = await request(app)
      .post('/')
      .send({ action: 'version' });

    expect(response.status).toBe(200);
  });

  it('should return OK for unknown action', async () => {
    const response = await request(app)
      .post('/')
      .send({ action: 'unknown_action' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });
});