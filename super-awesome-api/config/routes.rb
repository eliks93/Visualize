Rails.application.routes.draw do
  post '/songs', to: 'songs#create'
end
