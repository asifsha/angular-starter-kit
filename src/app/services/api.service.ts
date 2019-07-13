import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUserInfo(userId) {
    let userInfo = {
      userId: 101,
      userName: "Rich",
      searchHistory: [
        {
          destination: "Dubai",
          checkInData: "2019-5-1",
          checkOutDate: "2019-5-10",
          order: 3,
        },
        {
          destination: "Berlin",
          checkInData: "2019-4-4",
          checkOutDate: "2019-4-9",
          order:1
        },
        {
          destination: "Vancouver",
          checkInData: "2019-6-1",
          checkOutDate: "2019-6-10",
          order:2
        },
        {
          destination: "Amsterdam",
          checkInData: "2019-7-12",
          checkOutDate: "2019-8-10",
          order:5
        },
        {
          destination: "London",
          checkInData: "2019-10-10",
          checkOutDate: "2019-11-11",
          order:4
        }
      ]
    };

    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
