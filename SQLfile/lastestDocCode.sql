USE [QLPHONGKHAM]
GO
/****** Object:  UserDefinedFunction [dbo].[GetLatestDoctorCode]    Script Date: 12/27/2023 3:32:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[GetLatestDoctorCode]()
RETURNS NVARCHAR(10)
AS
BEGIN
    DECLARE @latestDoctorCode NVARCHAR(10)

    -- Sử dụng SELECT TOP 1 để lấy mã bác sĩ mới nhất
    SELECT @latestDoctorCode = MABACSI
    FROM BACSI
    ORDER BY ID DESC
    OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY

    RETURN @latestDoctorCode
END