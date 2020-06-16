import React from "react";
import App from "./App";
import mockFetchShow from "./api/fetchShow";
import userEvent from "@testing-library/user-event"; 
import { render, waitFor } from "@testing-library/react";
import data from "./utils/constants";

jest.mock( "./api/fetchShow" );

test( "Render API", async () => 
{
  mockFetchShow.mockResolvedValueOnce( data );

  const { findByText, getAllByTestId } = render( <App /> );

  userEvent.click( await findByText( /select a season/i ) );
  userEvent.click( await findByText( /season 1/i ) );

  await waitFor( () => expect( getAllByTestId( /episode/i ) ).toHaveLength( 2 ) );
  expect( mockFetchShow ).toHaveBeenCalled();
} );