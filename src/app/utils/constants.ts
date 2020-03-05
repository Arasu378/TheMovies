export class Constants {
    public static API_KEY = '?api_key='
   public static POPULAR_MOVIES = 'movie/popular' + Constants.API_KEY;
   public static TOP_RATED_MOVIES = 'movie/top_rated' + Constants.API_KEY;
   public static TRENDING = 'trending/all/day' + Constants.API_KEY;
   public static TOP_RATED_SERIES = 'tv/top_rated' + Constants.API_KEY;
   public static PERSON_BIOGRAPHY = 'person/{id}' + Constants.API_KEY;
   public static UPCOMING_MOVIES = 'movie/upcoming' + Constants.API_KEY;
   public static MOVIE_DETAILS = 'movie/{id}' + Constants.API_KEY;
   public static MOVIE_DETAILS_CREDITS = 'movie/{id}/credits' + Constants.API_KEY;
   public static NOW_PLAYING_MOVIES = 'movie/now_playing' + Constants.API_KEY;
   public static IMAGE_500 = 'https://image.tmdb.org/t/p/w500/';
   public static IMAGE_ORIGNIAL = 'https://image.tmdb.org/t/p/original/';
}