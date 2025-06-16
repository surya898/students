from django.contrib import admin
from .models import VideoTutorial,Subject,MathVideoTutorial,StudyNote,MathStudyNote,MalStudyNote,MalVideoTutorial,CsStudyNote,CsVideoTutorial,QuestionPaper,Quiz,Exam

# Register your models here.

@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(VideoTutorial)
class VideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'subject', 'created_at')

@admin.register(MathVideoTutorial)
class MathVideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'subject', 'created_at')

@admin.register(MalVideoTutorial)
class MalVideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'subject', 'created_at')

@admin.register(CsVideoTutorial)
class CsVideoTutorialAdmin(admin.ModelAdmin):
    list_display = ('title', 'subject', 'created_at')




@admin.register(StudyNote)
class EngStudyNoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'file','subject_name')

@admin.register(MathStudyNote)
class MathStudyNoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'file','subject_name')

@admin.register(MalStudyNote)
class MalStudyNoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'file','subject_name')

@admin.register(CsStudyNote)
class CsStudyNoteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'file','subject_name')

@admin.register(QuestionPaper)
class QuestionPaperAdmin(admin.ModelAdmin):
    list_display = ('subject', 'year', 'file')
    search_fields = ('subject', 'year')
    list_filter = ('subject', 'year')

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('question', 'option1', 'option2', 'option3', 'option4', 'correct_answer', 'subject')
    search_fields = ('question',)
    list_filter = ('subject',)

@admin.register(Exam)
class ExamAdmin(admin.ModelAdmin):
    list_display = ('question', 'correct_answer')  # Shows question & correct answer in the list view
    search_fields = ('question',)  # Enables search by question
    list_filter = ('correct_answer',)  # Allows filtering based on correct answer
    ordering = ('id',)  # Orders quizzes by ID