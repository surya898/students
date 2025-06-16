from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ViewSet,ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from rest_framework import generics,viewsets
from .models import Subject, VideoTutorial,MathVideoTutorial,StudyNote,MathStudyNote,MalStudyNote,MalVideoTutorial,CsStudyNote,CsVideoTutorial,QuestionPaper,Quiz,Exam
from .serializers import SubjectSerializer, VideoTutorialSerializer,MathVideoTutorialSerializer,StudyNoteSerializer,MathStudyNoteSerializer,MalVideoTutorialSerializer,MalStudyNoteSerializer,CsVideoTutorialSerializer,CsStudyNoteSerializer,QuestionPaperSerializer,QuizSerializer,ExamSerializer,USerSerializer

# List and detail view for subjects
from rest_framework import viewsets


class UserViewSet(ViewSet):
    def create(self,request):
        ser=USerSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(data=ser.data,status=status.HTTP_201_CREATED)
        return Response(data={"error":ser.errors},status=status.HTTP_400_BAD_REQUEST)

class SubjectViewSet(viewsets.ReadOnlyModelViewSet):  # ✅ Only GET allowed
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class VideoTutorialViewSet(viewsets.ReadOnlyModelViewSet):  # ✅ Only GET allowed
    queryset = VideoTutorial.objects.all()
    serializer_class = VideoTutorialSerializer

class MathVideoTutorialViewSet(viewsets.ReadOnlyModelViewSet):  # ✅ Only GET allowed
    queryset = MathVideoTutorial.objects.all()
    serializer_class = MathVideoTutorialSerializer

class StudyNoteViewSet(viewsets.ModelViewSet):
    queryset = StudyNote.objects.all()
    serializer_class = StudyNoteSerializer

class MathStudyNoteViewSet(viewsets.ModelViewSet):
    queryset = MathStudyNote.objects.all()
    serializer_class = MathStudyNoteSerializer

class MalVideoTutorialViewSet(viewsets.ReadOnlyModelViewSet):  # ✅ Only GET allowed
    queryset = MalVideoTutorial.objects.all()
    serializer_class = MalVideoTutorialSerializer

class MalStudyNoteViewSet(viewsets.ModelViewSet):
    queryset = MalStudyNote.objects.all()
    serializer_class = MalStudyNoteSerializer

class CsVideoTutorialViewSet(viewsets.ReadOnlyModelViewSet):  # ✅ Only GET allowed
    queryset = CsVideoTutorial.objects.all()
    serializer_class = CsVideoTutorialSerializer

class CsStudyNoteViewSet(viewsets.ModelViewSet):
    queryset = CsStudyNote.objects.all()
    serializer_class = CsStudyNoteSerializer

class QuestionPaperViewSet(viewsets.ModelViewSet):
    queryset = QuestionPaper.objects.all()
    serializer_class = QuestionPaperSerializer

class QuizViewSet(viewsets.ModelViewSet):  # ✅ Allows GET, POST, PUT, DELETE
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class ExamViewSet(viewsets.ModelViewSet):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer

