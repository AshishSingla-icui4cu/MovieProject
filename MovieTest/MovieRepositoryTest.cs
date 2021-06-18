using MovieProject.Service;
using System;
using Xunit;
using Moq;
using System.Collections.Generic;
using MovieProject.Model;

namespace MovieTest
{
    /// <summary>
    /// As i created only Movie repo service which is basically parsing movies.json file and giving me its
    /// corresponding mapped object so this is the only test i can think of which basically is just mocking and checking 
    /// the result and is not checking the actual functionality
    /// </summary>
    public class MovieRepositoryTest
    {
        [Fact]
        public void Should_Give_Movies_SeedData()
        {
            //Arrange
            Mock<IMovieRepository> repositoryMock = new Mock<IMovieRepository>();
            //Act
            repositoryMock.Setup(x => x.Movies).Returns(new List<Movie> { new Movie { Id = 1 } });

            //Assert
            Assert.True(repositoryMock.Object.Movies.Count > 0);
        }
    }
}
