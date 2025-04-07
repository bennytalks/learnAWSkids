import React from 'react';
import './chapter4.css';

const Chapter4 = () => {
  return (
    <div>
    <header><h1>Cloud</h1></header>

    <div className="Cloud">
      <div className="Cloud-explanation-pt1">
        Let’s imagine the cloud like a huge, magical library in the sky. 
        When you have something important like pictures, videos, or games, instead of keeping them in your room (on your computer), you 
        can send them up to the cloud, which is like putting them in this giant, safe library. You can always get them back whenever 
        you want, just by using the internet. The best part is that the library is so big that you don’t have to worry about 
        running out of space!
      </div>

      <div className="Cloud-explanation-pt2">
        Now, AWS (Amazon Web Services) is like a special, super-powered cloud library. 
        It helps people store things in the cloud, run programs, and even make their websites and apps. AWS makes sure everything is 
        safe and that people can reach their stuff really fast, just like how you can get a book from the library whenever you need it.
      </div>

      <div className="Cloud-explanation-pt3">
        To get to the cloud, we need three things: the client, the network, and the server.
        <ol>
          <li className="Client-explanation">
            <h3 className="Client-header">Client:</h3>
            This is like you, the person who wants to get something from the cloud. 
            It could be your phone, tablet, or computer—anything that helps you reach the cloud.
            When you want to see your pictures or play a game, you use your device as the client to 
            ask for what you want.
          </li>
          <li className="Network-explanation">
            <h3 className="Network-header">Network:</h3>
            This is like the road that connects you to the cloud. It’s the internet! 
            When you ask for something, your device (the client) sends your request through the network (the internet) to the cloud.
          </li>
          <li className="Server-explanation">
            <h3 className="Server-header">Server:</h3>
            The server is like a helpful librarian in the magical library. Once your request reaches 
            the cloud (through the network), the server is the one that finds the thing you asked for and sends it back to you. 
            It makes sure everything goes smoothly and safely.
          </li>
        </ol>
      </div>
    </div>

    <div className="Private-cloud">
      <div className="Private-cloud-explanation">
        <h3 className="Private-cloud-header">Private Cloud:</h3>
        Imagine you have your own special library, just for you and your family. 
        Only you can access the books (or pictures, files, etc.), and you can keep it in your house or somewhere private. 
        This is like a private cloud—it's a space on the internet where only certain people or businesses can put their things. 
        It’s more secure, and it’s controlled by the person or company that owns it.
      </div>
      <div className="Private-cloud-example">
        Example: Imagine you use Google Photos to keep all your family pictures safe and private. 
        Only your family can see the photos unless you choose to share them. This is like a private cloud—you can store things 
        like photos, emails, or videos, and only certain people can access them. It’s a safe, private place just for you and the 
        people you trust.
      </div>
    </div>

    <div className="Public-cloud">
      <div className="Public-cloud-explanation">
        <h3 className="Public-cloud-header">Public Cloud:</h3>
        Now, think about a huge library that everyone in the world can visit. It’s open to the public, 
        and you can put your stuff there for everyone to use. A public cloud is like that. It’s a big, shared space on the internet
        (like AWS or Google Cloud) where anyone can store things and use its services. It’s not private, but it’s easy to access, 
        and many people share it.
      </div>
      <div className="Public-cloud-example">
        Example: YouTube is a great example of a public cloud. Anyone can upload a video, 
        and anyone can watch those videos. It’s like a big, public playground where people share videos, and everyone can enjoy them. 
        The public cloud lets anyone use it without needing special permission.
      </div>
    </div>

    <div className="Hybrid-cloud">
      <div className="Hybrid-cloud-explanation">
        <h3 className="Hybrid-cloud-header">Hybrid Cloud:</h3>
        A hybrid cloud is like having both! Imagine you have your private library at home, but sometimes you borrow books 
        from the big public library too. You can keep some things private and safe in your own library, but when you need more space 
        or extra help, you can use the big public library. With a hybrid cloud, businesses can keep some things on their private cloud 
        and use the public cloud for other things.
      </div>
      <div className="Hybrid-cloud-example">
        Example: Netflix uses a hybrid cloud. It stores a lot of movies and shows on its own private cloud (to keep things safe and 
        organized) but also uses the public cloud for extra help when many people want to watch at the same time. This is like having 
        your own toy box at home, but when you need more toys for your friends to play with, you borrow them from a big toy store.
      </div>
    </div>
  </div>
  );
};

export default Chapter4;
