from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
def getNotes(request):
    if request.method=='GET':
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        print(request.data)
        data = request.data
        note = Note.objects.create(body=data['body'], title=data['title'])
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    if request.method=='GET':
        notes = Note.objects.get(id=pk)
        serializer = NoteSerializer(notes, many=False)
        return Response(serializer.data)

    elif request.method=='PUT':
        data = request.data
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note, data=data)

        if serializer.is_valid():
            serializer.save()
        
        return Response(serializer.data)
    
    elif request.method=='DELETE':
        note = Note.objects.get(id=pk)
        note.delete()
        return Response({'success':'True', 'msg':'NOTE WAS DELETED'})
    