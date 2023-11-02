from django.urls import path, re_path
import shop.views as shop  #from shops.views import index, movie, categories

urlpatterns = [
    path('', shop.index),  # http://127.0.0.1:8000/shops/
    path('movie/<int:id_movie>/', shop.movie), # http://127.0.0.1:8000/shop/movie/{id}/
    path('categories/<slug:cat_name>/', shop.categories), # http://127.0.0.1:8000/shop/categories/{cat_name}/

    # http://127.0.0.1:8000/shop/archive/2000 
    re_path(r"^archive/(?P<year>(1|2)\d{3})/$", shop.archive),
    # http://127.0.0.1:8000/shops/archive/434324234 
]