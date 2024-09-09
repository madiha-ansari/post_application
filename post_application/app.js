// Function to add a post
function addPost() {
    let postContent = document.getElementById('postContent').value;

    if (postContent.trim() !== "") {
        // Create a new div element for the post
        let newPost = document.createElement('div');
        newPost.classList.add('post');

        // Add the post content to the div
        let postText = document.createElement('p');
        postText.textContent = postContent;

        // Create an Edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editPost(postText);
        };

        // Create a Delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function() {
            deletePost(newPost);
        };

        // Append the post content, edit button, and delete button to the post div
        newPost.appendChild(postText);
        newPost.appendChild(editButton);
        newPost.appendChild(deleteButton);

        // Add the new post to the posts container
        document.getElementById('posts').appendChild(newPost);

        // Clear the textarea after submitting
        document.getElementById('postContent').value = '';
    } else {
        alert("Please write something before submitting!");
    }
}

// Function to edit a post
function editPost(postText) {
    // Prompt the user to edit the post
    let updatedText = prompt("Edit your post:", postText.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
        postText.textContent = updatedText;
    } else {
        alert("Post cannot be empty!");
    }
}

// Function to delete a post
function deletePost(postElement) {
    // Remove the post element
    postElement.remove();
}
