import Comment from "../model/Comment.js";
import Post from "../model/Post.js";

// CREATE NEW POST
export const addPost = async (req, res, next) => {
  try {
    const savePost = await Post.create(req.body);
    // const newPost = await Post(req.body);
    // const savePost = await newPost.save();
    res.status(200).send(savePost);
  } catch (error) {
    next(error);
  }
};

// UPDAT POST
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(post);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send(error.message);
    }
    next(error);
  }
};

// DELETED POST ID
export const deletPost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    await Comment.deleteMany({ postId: req.params.id });

    res.status(200).send(`Post has  Deleted Successfully!`);

  } catch (error) {
    next(error);
  }
};

// GET POST DETAILS
export const getPostId = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).send(`postId not found`);
    }
    res.status(200).send(post);
  } catch (error) {
    next(error);
  }
};
// GET POSTS
export const getAllPosts = async (req, res, next) => {
  const searchPost = req.query.search; // Zugriff auf den Suchparameter
  try {
    let searchFilter = {}; // Initialisierung des Filters

    if (searchPost) {
      // Überprüfen, ob die Suchanfrage vorhanden ist
      searchFilter = { title: { $regex: searchPost, $options: "i" } }; // Filter entsprechend setzen
    }
    const posts = await Post.find(searchFilter); // MongoDB-Abfrage mit dem Filter ausführen
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};

// GET USER  COMMENT
export const getUserId = async (req, res, next) => {
  try {
    //    userId findet sich im Model(PostSchema)
    const posts = await Post.find({ userId: req.params.userId });

    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
};
