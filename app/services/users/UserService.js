/**
 * Created by david on 6/5/15.
 */

'use strict';

function UserService($q){

    var users = [
        {
            id: 100,
            name: 'Lia Lugo',
            avatar: 'svg-1',
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
            likesWine: false,
            likesBeer: false,
            likesVodka: false,
            likesRum: false,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: []
        },
        {
            id: 200,
            name: 'George Duke',
            avatar: 'svg-2',
            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
            likesWine: false,
            likesBeer: false,
            likesVodka: false,
            likesRum: false,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: []
        },
        {
            id: 300,
            name: 'Gener Delosreyes',
            avatar: 'svg-3',
            content: "Raw denim pour-over readymade Etsy Pituserschfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
            likesWine: false,
            likesBeer: false,
            likesVodka: false,
            likesRum: false,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: []
        },
        {
            id: 400,
            name: 'Lawrence Ray',
            avatar: 'svg-4',
            content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
            likesWine: true,
            likesBeer: false,
            likesVodka: false,
            likesRum: true,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: ['Cookies', 'Milk']
        },
        {
            id: 500,
            name: 'Ernesto Urbina',
            avatar: 'svg-5',
            content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
            likesWine: false,
            likesBeer: false,
            likesVodka: false,
            likesRum: false,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: []
        },
        {
            id: 600,
            name: 'Gani Ferrer',
            avatar: 'svg-6',
            content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
            likesWine: false,
            likesBeer: false,
            likesVodka: false,
            likesRum: false,
            likesTequila: false,
            likesWhiskey: false,
            alsoLikes: []
        }
    ];

    return {
        loadAllUsers : function() {
            // Simulate async nature of remote calls
            return $q.when(users);
        },
        updateUser: function(updatedUser){
            users.forEach(function(user){
                if(user.id === updatedUser.id){
                    user = updatedUser;
                }
            });
        }
    };
};

module.exports = UserService;
