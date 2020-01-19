import React from "react";
// import PropTypes from 'prop-types';
import {
  Grid, Card, Feed, Icon,
} from "semantic-ui-react";
// import Layout from '../components/Layout';
import MenuExampleVertical from "../components/Menu";

// TODO: check if the user is authenticated
//  the show the correct page
const Index = () => (
  <Grid stackable>
    <Grid.Row columns={2}>
      <Grid.Column width={3}>
        <MenuExampleVertical />
      </Grid.Column>
      <Grid.Column textAlign="center" width={9}>
        <div style={{ height: "80vh", overflowY: "scroll" }}>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Elliot Fu</Feed.User>
                  {" "}
added you as a friend
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
4 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Helen Troy</a>
                  {" "}
added
                  <a>2 new illustrations</a>
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
1 Like
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary
                  date="2 Days Ago"
                  user="Jenny Hess"
                  content="add you as a friend"
                />
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
8 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a>
                  {" "}
posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                                          Ours is a life of constant reruns. We're always circling back to where
                                          we'd we started, then starting all over again. Even if we don't run
                                          extra laps that day, we surely will come back for more of the same
                                          another day soon.
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
5 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Justen Kitsune</a>
                  {" "}
added
                  <a>2 new photos</a>
                  {" "}
of you
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
                                              41 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label>
                <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Elliot Fu</Feed.User>
                  {" "}
added you as a friend
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
4 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Helen Troy</a>
                  {" "}
added
                  <a>2 new illustrations</a>
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
1 Like
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary
                  date="2 Days Ago"
                  user="Jenny Hess"
                  content="add you as a friend"
                />
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
8 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a>
                  {" "}
posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                                          Ours is a life of constant reruns. We're always circling back to where
                                          we'd we started, then starting all over again. Even if we don't run
                                          extra laps that day, we surely will come back for more of the same
                                          another day soon.
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
5 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Label image="/img/settings-gears-1.svg" />
              <Feed.Content>
                <Feed.Summary>
                  <a>Justen Kitsune</a>
                  {" "}
added
                  <a>2 new photos</a>
                  {" "}
of you
                  <Feed.Date>4 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra images>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                  <a>
                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  </a>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
                                              41 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <Card>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="1 day ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Jenny Hess</a>
                    {" "}
to your
                    {" "}
                    <a>coworker</a>
                    {" "}
group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="3 days ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Molly Malone</a>
                    {" "}
as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="4 days ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Elliot Baker</a>
                    {" "}
to your
                    {" "}
                    <a>musicians</a>
                    {" "}
group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="1 day ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Jenny Hess</a>
                    {" "}
to your
                    {" "}
                    <a>coworker</a>
                    {" "}
group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="3 days ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Molly Malone</a>
                    {" "}
as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="/img/speech-bubble.svg" />
                <Feed.Content>
                  <Feed.Date content="4 days ago" />
                  <Feed.Summary>
                                              You added
                    {" "}
                    <a>Elliot Baker</a>
                    {" "}
to your
                    {" "}
                    <a>musicians</a>
                    {" "}
group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Index;
