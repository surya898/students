from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class VideoTutorial(models.Model):
    title = models.CharField(max_length=255)
    video_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)  # Not NULL

    def __str__(self):
        return self.title
       
class MathVideoTutorial(models.Model):
    title = models.CharField(max_length=255)
    video_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)  # Not NULL

    def __str__(self):
        return self.title
    
class StudyNote(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(upload_to='study_notes/')
    subject_name = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
class MathStudyNote(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(upload_to='study_notes/')
    subject_name = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
class MalVideoTutorial(models.Model):
    title = models.CharField(max_length=255)
    video_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)  # Not NULL

    def __str__(self):
        return self.title
    
class MalStudyNote(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(upload_to='study_notes/')
    subject_name = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
class CsVideoTutorial(models.Model):
    title = models.CharField(max_length=255)
    video_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)  # Not NULL

    def __str__(self):
        return self.title
    
class CsStudyNote(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    file = models.FileField(upload_to='study_notes/')
    subject_name = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    

class QuestionPaper(models.Model):
    subject_choices = [
        ('eng', 'English'),
        ('cs', 'Computer Science'),
        ('math', 'Mathematics'),
        ('mal', 'Malayalam'),
    ]
    subject = models.CharField(max_length=10, choices=subject_choices)
    file = models.FileField(upload_to='question_papers/')
    year = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.subject} - {self.year}"

class Quiz(models.Model):
    subject = models.ForeignKey('Subject', on_delete=models.CASCADE)  # Link to Subject
    question = models.TextField()  # The quiz question
    option1 = models.CharField(max_length=255)
    option2 = models.CharField(max_length=255)
    option3 = models.CharField(max_length=255)
    option4 = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)  # Store the correct answer text

    def __str__(self):
        return self.question
    

class Exam(models.Model):
    question = models.TextField()
    option1 = models.CharField(max_length=255)
    option2 = models.CharField(max_length=255)
    option3 = models.CharField(max_length=255)
    option4 = models.CharField(max_length=255)
    correct_answer = models.CharField(max_length=255)

    def __str__(self):
        return self.question

