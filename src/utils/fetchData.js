export const exerciseOptions =  {


 
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'b6794fa884msh6005e8fae48964ep1f2edajsn479008aca475',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions= {
  method: 'GET', 
  headers: {
    'X-RapidAPI-Key': 'b6794fa884msh6005e8fae48964ep1f2edajsn479008aca475',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b6794fa884msh6005e8fae48964ep1f2edajsn479008aca475',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

     
  

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

