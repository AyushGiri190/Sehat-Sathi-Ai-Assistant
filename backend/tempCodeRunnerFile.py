from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from lungcancer import predict_image_lung
from tuberculosis import predict_image_tuber
from braincancer import predict_image_brain
from Breast_cancer import predict_image_breast
from response import get_chatbot_response
import os
from utils.chat_history import chat_history