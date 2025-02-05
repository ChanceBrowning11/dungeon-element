import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Only use csrf_exempt for endpoints that are called externally
def webhook_view(request):
    if request.method == 'POST':
        try:
            payload = json.loads(request.body)
            # Process the webhook payload as needed
            print("Received webhook payload:", payload)
            return JsonResponse({'status': 'success'}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    return JsonResponse({'error': 'Invalid method'}, status=405)
