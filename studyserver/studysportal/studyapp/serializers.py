from rest_framework import serializers
from .models import Subject, VideoTutorial,MathVideoTutorial,StudyNote,MathStudyNote,MalStudyNote,MalVideoTutorial,CsStudyNote,CsVideoTutorial,QuestionPaper,Quiz,Exam
from django.contrib.auth.models import User





class USerSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["username","email","password"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    

class VideoTutorialSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = VideoTutorial
        fields = ['id', 'title', 'video_url', 'created_at', 'subject_name',]



class MathVideoTutorialSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = MathVideoTutorial
        fields = ['id', 'title', 'video_url', 'created_at', 'subject_name',]




class SubjectSerializer(serializers.ModelSerializer):
    video_tutorials = VideoTutorialSerializer(many=True, read_only=True)

    class Meta:
        model = Subject
        fields = '__all__'

class StudyNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyNote
        fields = ['id', 'title', 'description', 'file', 'subject_name']

class MathStudyNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MathStudyNote
        fields = ['id', 'title', 'description', 'file', 'subject_name']

class MalVideoTutorialSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = MalVideoTutorial
        fields = ['id', 'title', 'video_url', 'created_at', 'subject_name',]

class MalStudyNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MalStudyNote
        fields = ['id', 'title', 'description', 'file', 'subject_name']

class CsVideoTutorialSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = CsVideoTutorial
        fields = ['id', 'title', 'video_url', 'created_at', 'subject_name',]

class CsStudyNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CsStudyNote
        fields = ['id', 'title', 'description', 'file', 'subject_name']

class QuestionPaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionPaper
        fields = ['id', 'subject', 'file', 'year']

class QuizSerializer(serializers.ModelSerializer):
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = Quiz
        fields = ['id', 'subject', 'subject_name', 'question', 'option1', 'option2', 'option3', 'option4', 'correct_answer']


class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exam
        fields = '__all__'
