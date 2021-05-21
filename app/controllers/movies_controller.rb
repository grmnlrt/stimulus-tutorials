class MoviesController < ApplicationController
  def index
    if params[:query].blank?
      @movies = Movie.all
    else
      @movies = Movie.where('title ILIKE ?', "%#{params[:query]}%")
    end
  end
end
