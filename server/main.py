from flask import Flask, jsonify, request
from flask_cors import CORS


import yt_dlp

app=Flask(__name__)
cors=CORS(app,origin="*")



@app.route("/api/download", methods=["POST"])
def download_video():
    try:
        data = request.get_json()
        print("Received data:", data)  # Debugging line
        link = data.get("link")

        if not link:
            return jsonify({"error": "No link provided"}), 400

        ydl_opts = {
            'outtmpl': f'./%(title)s.%(ext)s',
            'format': 'mp4',  # Force mp4 format
            'noplaylist': True,
        }
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([link])

        return jsonify({"message": "Video downloaded successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__=="__main__":
    app.run(debug=True,port=8080)