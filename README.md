# CaptionMate

CaptionMate is a React-based web application that allows users to add timestamps with captions to videos, navigate through the video using these timestamps, and display captions dynamically during playback. This interactive tool is ideal for annotating videos with meaningful captions and timestamps.

---

## **Features**

1. **Add Timestamps with Captions**:
   - Users can input captions along with their start and end timestamps.
   - A dedicated button allows users to save these timestamps and captions, which are displayed in a table for easy navigation.

2. **Dynamic Caption Bar**:
   - A caption bar dynamically updates to display the caption associated with the current playback time.
   - Captions are cleared from the bar once the playback time exceeds the defined range.

3. **Clickable Captions for Navigation**:
   - Captions in the table are clickable.
   - Clicking on a caption seeks the video to the corresponding timestamp and displays the associated caption in the caption bar.

4. **Video Playback**:
   - Users can load a video using a YouTube URL and play, pause, or seek to specific times based on timestamps.

5. **Responsive and User-Friendly UI**:
   - The application features a clean, responsive layout with sections for video playback, timestamp input, and caption management.
   - Captions and timestamps are displayed in a scrollable table for easy management.

---

## **How to Use**

1. **Load a Video**:
   - Enter the YouTube video URL in the input field and click the **"Load Video"** button.

2. **Add a Caption**:
   - Enter the caption text along with its start and end times (in MM:SS format) in the input fields.
   - Click the **"Add Timestamp with Caption"** button to save the caption.

3. **Navigate Using Captions**:
   - Captions appear in a table with their respective start and end times.
   - Click on any caption to seek the video to its start time and display the caption in the caption bar.

4. **Dynamic Caption Updates**:
   - During playback, the caption bar automatically updates to show the relevant caption based on the video’s current time.

---

## **Screenshots**

### Main Interface:
![Main Interface](./assets/screenshot1.png)

### Captions and Timestamps:
![Captions and Timestamps](./assets/screenshot2.png)

---

## **Setup Instructions**

### **Prerequisites**:
- Node.js and npm installed on your system.

### **Installation**:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/captionmate.git
   ```
2. Navigate to the project directory:
   ```bash
   cd captionmate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### **Running the App**:
- The app will run locally at `http://localhost:3000`.

---

## **Project Structure**

- **`/components`**: Contains modular React components:
  - `VideoInput`: Handles video URL input.
  - `CaptionEditor`: Manages caption and timestamp input.
  - `VideoDisplay`: Handles video playback and dynamic caption updates.

- **`App.css`**: Styles for the application layout and components.

- **`App.js`**: Main application logic integrating all components.

---

## **Technologies Used**

- **Frontend**: React.js
- **Video Player**: ReactPlayer
- **Styling**: CSS (custom styling)

---

## **Future Enhancements**

1. Export and import caption data for reuse.
2. Allow users to edit or delete timestamps and captions.
3. Add support for more video platforms beyond YouTube.
4. Enable real-time collaboration on captions.

---

## **Contributing**

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
