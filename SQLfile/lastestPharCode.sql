USE [QLPHONGKHAM]
GO
/****** Object:  UserDefinedFunction [dbo].[GetLatestPharCode]    Script Date: 12/27/2023 3:32:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetLatestPharCode]()
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @latestPharCode NVARCHAR(10);

    -- Sử dụng SELECT TOP 1 để lấy mã dược sĩ mới nhất
    SELECT @latestPharCode = MADUOCSI
    FROM DUOCSI
    ORDER BY ID DESC
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;

    RETURN @latestPharCode;
END;