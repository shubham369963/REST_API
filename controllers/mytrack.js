
const Track = require("../models/track.js");
const getalltrack = async(req, res) =>{
    const {dsa , easy, medium, hard, sort,select} = req.query;
    const queryobj = {};

    if(dsa){
        queryobj.dsa = {$regex: dsa, $options: "i"}; //i - case insensitive
        //http://localhost:8000/api/mytrack?dsa=array
        //http://localhost:8000/api/mytrack?dsa=tre
        console.log(queryobj);
    }

    if(easy){
        queryobj.easy = easy;
        //http://localhost:8000/api/mytrack?easy=2
        console.log(queryobj);
    }

    if(medium){
        queryobj.medium = medium;
        //http://localhost:8000/api/mytrack?medium=3
        console.log(queryobj);
    }

    if(hard){
        queryobj.hard = hard;
        //http://localhost:8000/api/mytrack?hard=3
        console.log(queryobj);
    }

    let apidata = Track.find(queryobj);

    if(sort){
        //let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        apidata = apidata.sort(sortFix);
        //http://localhost:8000/api/mytrack?sort=medium
        //http://localhost:8000/api/mytrack?sort=-medium
        console.log(queryobj);
    }

    if(select){
        //let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix);
        //http://localhost:8000/api/mytrack?select=dsa,hard
        console.log(queryobj);
    }

    //pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page-1)*limit;
    apidata = apidata.skip(skip).limit(limit);
    //http://localhost:8000/api/mytrack?page=2

    console.log(queryobj);

    const mydata = await apidata;
    //http://localhost:8000/api/mytrack

    res.status(200).json({mydata, nbhits: mydata.length});
};

const getalltracktesting = async(req, res) =>{

    // const mydatatest = await Track.find(req.query); 
    // const mydatatest = await Track.find(req.query).sort("-hard"); -hard descending order
    const mydatatest = await Track.find(req.query).select("hard dsa");
    console.log(req.query);

    //http://localhost:8000/api/mytrack/testing
    //http://localhost:8000/api/mytrack/testing?dsa=array
    //http://localhost:8000/api/mytrack/testing?easy=2&dsa=array
    res.status(200).json(mydatatest);
};

module.exports = {getalltrack , getalltracktesting};

//for hosting api i used railway