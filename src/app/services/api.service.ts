import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor() {}

  getUserInfo(userId) {
    let userInfo = {
      userId: 101,
      userName: "Rich",
      searchHistory: [
        {
          destination: "Dubai",
          checkInData: "2019-5-1",
          checkOutDate: "2019-5-10",
          order: 3
        },
        {
          destination: "Berlin",
          checkInData: "2019-4-4",
          checkOutDate: "2019-4-9",
          order: 1
        },
        {
          destination: "Vancouver",
          checkInData: "2019-6-1",
          checkOutDate: "2019-6-10",
          order: 2
        },
        {
          destination: "Amsterdam",
          checkInData: "2019-7-12",
          checkOutDate: "2019-8-10",
          order: 5
        },
        {
          destination: "London",
          checkInData: "2019-10-10",
          checkOutDate: "2019-11-11",
          order: 4
        }
      ],
      bookingHistory: [
        {
          destination: "Toronto",
          checkInData: "2019-6-10",
          checkOutDate: "2019-6-11",
          ratings: 4,
          comments: "Awesome place, will book again!",
          totalAmount: 150,
          order: 4
        },
        {
          destination: "Breda",
          checkInData: "2018-3-10",
          checkOutDate: "2018-3-15",
          ratings: 5,
          comments: "Nice place, great service.",
          totalAmount: 250,
          order: 1
        },
        {
          destination: "Visby",
          checkInData: "2018-5-15",
          checkOutDate: "2019-5-19",
          ratings: 3,
          comments: "Small place, limited space available.",
          totalAmount: 150,
          order: 2
        },
        {
          destination: "Munich",
          checkInData: "2019-1-5",
          checkOutDate: "2019-1-11",
          ratings: 5,
          comments: "Great place, will book again!",
          totalAmount: 230,
          order: 3
        },
        {
          destination: "Paris",
          checkInData: "2019-10-10",
          checkOutDate: "2019-11-11",
          ratings: 3,
          comments: "Fine place, fair charges!",
          totalAmount: 150,
          order: 5
        },
      ]
    };

    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
