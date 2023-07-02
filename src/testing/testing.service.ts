import { Injectable } from '@nestjs/common';

@Injectable()
export class TestingService {
  helloWorld() {
    const randInt = Math.floor(Math.random() * 11)
    const testData = [];

    for(let i = 0; i < randInt; i++) {
      testData.push({
        title: `This data is the ${i} one`,
        index: i,
      })
    }
    return JSON.stringify({
      data: {
        helloWorld: 'Hello World',
        testData
      }
    })
  }
}
