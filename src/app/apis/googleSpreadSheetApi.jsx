import { NextResponse } from 'next/server';

export async function addIntoSpreadSheet(request) {
  try {
    // Replace with your Web App URL
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_API_URL;
    console.log('mintu', googleScriptUrl);

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(request),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Data saved successfully' });
    } else {
      return NextResponse.json(
        { message: 'Error saving data' },
        { status: response.status },
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
