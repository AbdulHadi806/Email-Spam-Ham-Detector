from django.http import JsonResponse
from rest_framework.decorators import api_view
import joblib
from .models import Mail

def custom_predict(X, threshold, model):
    probs = model.predict_proba(X) 
    return (probs[:, 1] > threshold).astype(int)

def get_pipeline():
    path = "my-model/models"
    pipeline = joblib.load(f"{path}/pipeline.joblib")
    return pipeline

def make_prediction(subject):
    emailSubject = subject
    pipeline = get_pipeline()
    prediction = custom_predict([emailSubject], 0.6, pipeline)
    return prediction

@api_view(['POST'])
def create_mail(request):
    subject = request.data.get('subject', None)
    if subject is None:
        return JsonResponse({"status": "400 - Bad Request. Something is missing!",'subject': subject})
    isHam = make_prediction(subject)
    isHam = True if isHam == 1 else False
    mail = Mail.objects.create(subject=subject, isHam = isHam)
    return JsonResponse({'id': mail.id, 'subject': mail.subject, 'isHam': mail.isHam})

@api_view(['GET'])
def get_created_mails(request):
    mails = Mail.objects.all()
    mail_data = [{'id': mail.id, 'subject': mail.subject, 'isHam': mail.isHam} for mail in mails]
    return JsonResponse({'mails': mail_data})



@api_view(['POST'])
def retrain_model(request):
    id = request.data
    print(id, ':::id::::')
    mails = Mail.objects.filter(id=id)
    print(mails[0], 'mails')
    # pipeline = get_pipeline()
    # pipeline.partial_fit(mails)
    return JsonResponse({'mails': "mail_data"})
