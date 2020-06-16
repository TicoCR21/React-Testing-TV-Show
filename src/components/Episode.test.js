import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";
import data from "../utils/constants";

test( "Rendering Episodes" , () =>
{
  const { queryAllByTestId, rerender } = render( <Episodes episodes = { [] } /> );
  expect( queryAllByTestId( /episode/i ) ).toHaveLength( 0 );

  rerender( <Episodes episodes = { data.data._embedded.episodes } /> );
  expect( queryAllByTestId( /episode/i ) ).toHaveLength( 2 );
} );