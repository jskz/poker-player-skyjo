export const VERSION = "log requests";

export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    const minimumRaise = gameState.minimum_raise;
    console.log(gameState);
    console.log(`Minimum raise: ${minimumRaise}`);
    betCallback(minimumRaise);
  }

  public showdown(gameState: any): void {
  }
};

export default Player;
