import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "../components/Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomContainer);

//Below is another way to get value without using withRoomConsumer function in
//context.js component

/* import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "../components/Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            Room Container
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
 */
