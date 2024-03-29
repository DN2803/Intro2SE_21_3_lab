USE [QLPHONGKHAM]
GO
/****** Object:  UserDefinedFunction [dbo].[GetNumericFromCode]    Script Date: 12/27/2023 3:31:44 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetNumericFromCode]
(
    @inputString NVARCHAR(10)
)
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @numericPart NVARCHAR(10)
    DECLARE @firstDigitPosition INT = PATINDEX('%[0-9]%', @inputString)


    IF @firstDigitPosition > 0
    BEGIN
        SET @numericPart = SUBSTRING(@inputString, @firstDigitPosition, LEN(@inputString))
    END
    ELSE
        SET @numericPart = NULL

    RETURN @numericPart
END