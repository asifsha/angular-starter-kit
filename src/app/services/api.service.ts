import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor() {}

  items = [
    {
      itemId: 1,
      name: "Pen",
      date: "2008-12-10",
      price: 50,
      inStock: true,
      type: 1
    },
    {
      itemId: 2,
      name: "Pencil",
      date: "2018-03-04",
      price: 30,
      inStock: true,
      type: 1
    },
    {
      itemId: 3,
      name: "Macbook",
      date: "2018-10-10",
      price: 1500,
      inStock: true,
      type: 2
    },
    {
      itemId: 4,
      name: "Table",
      date: "2016-03-03",
      price: 150,
      inStock: false,
      type: 3
    },
    {
      itemId: 5,
      name: "Bulb",
      date: "2015-03-02",
      price: 100,
      inStock: false,
      type: 4
    }
  ];

  itemTypes = [
    {
      id: 1,
      name: "Electronics"
    },
    {
      id: 2,
      name: "Office Accessories"
    },
    {
      id: 3,
      name: "Household"
    }
  ];
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
        }
      ]
    };

    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  getAllItems() {
    return new Promise((resolve, reject) => {
      resolve(this.items);
    });
  }

  getItem(itemId) {
    return new Promise((resolve, reject) => {
      const item = this.items.find(i => i.itemId === itemId);
      resolve(item);
    });
  }

  getNewItem() {
    return new Promise((resolve, reject) => {
      const item = {
        itemId: -1,
        name: "",
        date: "",
        price: 0,
        inStock: false,
        type: 0
      };
      resolve(item);
    });
  }

  saveItem(itemRecord) {
    return new Promise((resolve, reject) => {
      if (itemRecord.itemId === -1) {
        const id = Math.max.apply(
          Math,
          this.items.map(function(i) {
            return i.itemId;
          })
        );
        itemRecord.itemId = id + 1;
        this.items.push(itemRecord);
      } else {
        let index = this.items.findIndex(i => i.itemId === itemRecord.itemId);
        this.items[index] = Object.assign({}, itemRecord);
      }

      resolve(itemRecord);
    });
  }

  deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      let index = this.items.findIndex(i => i.itemId === itemId);
      this.items.splice(index, 1);
      resolve(true);
    });
  }

  getItemTypes() {
    return new Promise((resolve, reject) => {     
      resolve(this.itemTypes);
    });
  }
}
