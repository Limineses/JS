class Post
{
	constructor(name, image, text, likes)
	{

		this.name = name;
		this.image = image;
		this.text = text;
		this.likes = likes;
		this.comments = [];
	}
	addComment(comment)
	{
		this.comments.push(comment);
	}
}