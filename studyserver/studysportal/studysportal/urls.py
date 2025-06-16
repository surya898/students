"""
URL configuration for studysportal project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from studyapp.views import *
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken import views


from studyapp.views import SubjectViewSet, VideoTutorialViewSet,MathVideoTutorialViewSet,MathStudyNoteViewSet,MalStudyNoteViewSet,MalVideoTutorialViewSet,CsStudyNoteViewSet,CsVideoTutorialViewSet,QuestionPaperViewSet,ExamViewSet,UserViewSet

router = DefaultRouter()
router.register('user',UserViewSet,basename='user')

router.register(r'subjects', SubjectViewSet)
router.register(r'video_tutorials', VideoTutorialViewSet)
router.register(r'mathvideo_tutorials', MathVideoTutorialViewSet)
router.register(r'study_notes', StudyNoteViewSet)
router.register(r'mathstudy_notes', MathStudyNoteViewSet)
router.register(r'malstudy_notes', MalStudyNoteViewSet)
router.register(r'malvideo_tutorials', MalVideoTutorialViewSet)
router.register(r'csstudy_notes', CsStudyNoteViewSet)
router.register(r'csvideo_tutorials', CsVideoTutorialViewSet)
router.register(r'question_papers', QuestionPaperViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'exam', ExamViewSet)





urlpatterns = [
    path('admin/', admin.site.urls),
    path('token',views.obtain_auth_token),

    path('', include(router.urls)),]
