

export const getGifs = async ( category ) => {

                const API_KEY = 'WdNDZTlpQUtrAC8PHLiUIvSo52lkc6vV';
                const API_URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=${ API_KEY }&q=&limit=25&offset=0&rating=g&lang=en`

                const res = await fetch( API_URL );
                const { data } = await res.json();

                const gifs = data.map(item => {
                                return {
                                                id: item.id,
                                                title: item.title,
                                                url: item.images?.downsized_medium.url
                                };
                });

                return gifs.slice( 0, 5 );
};