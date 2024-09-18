document.querySelector('.download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/to/your-cv.pdf'; // Replace with the path to your CV file
    link.download = 'Your_Name_CV.pdf'; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
