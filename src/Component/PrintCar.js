import React, {Component} from 'react';

import CarComponent from "./CarComponent";

class PrintCar extends Component {
    cars = [
        {producer:"subaru",power: 400,owner:{name:"Andriy",age:25,exp:2},price:55000,year: 2010},
        {producer:"bmw",power: 500,owner:{name:"Oleh",age:21,exp:1},price:50000,year: 2012},
        {producer:"mercedes",power: 550,owner:{name:"Vasya",age:40,exp:5},price:40000,year: 2011},
        {producer:"reno",power: 300,owner:{name:"Igor",age:35,exp:7},price:12000,year: 2008},
        {producer:"opel",power: 250,owner:{name:"Valentyn",age:22,exp:3},price:6000,year: 2007},
        {producer:"lada",power: 150,owner:{name:"Mykola",age:27,exp:6},price:4000,year: 2005},
        {producer:"bmw",power: 450,owner:{name:"Andriy",age:45,exp:10},price:35000,year: 2016},
        {producer:"mazda",power: 500,owner:{name:"Kyrylo",age:37,exp:8},price:20000,year: 2014},
        {producer:"reno",power: 350,owner:{name:"Misha",age:33,exp:13},price:16000,year: 2009},
        {producer:"honda",power: 600,owner:{name:"Sasha",age:29,exp:4},price:65000,year: 2017},
        {producer:"subaru",power: 650,owner:{name:"Bodya",age:26,exp:3},price:95000,year: 2018},
        {producer:"porshe",power: 700,owner:{name:"Yura",age:44,exp:8},price:100000,year: 2020},
        {producer:"voltsvagen",power: 400,owner:{name:"Roma",age:39,exp:11},price:8000,year: 2008},
        {producer:"toyota",power: 350,owner:{name:"Kolya",age:19,exp:1},price:6000,year: 2004},
    ];
    render() {
        return (
            <div>
                {
                    this.cars.map((car,index)=>{
                        return(
                            <CarComponent
                                caritem={car}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default PrintCar;